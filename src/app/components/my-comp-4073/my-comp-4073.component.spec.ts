import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4073Component } from './my-comp-4073.component';

describe('MyComp4073Component', () => {
  let component: MyComp4073Component;
  let fixture: ComponentFixture<MyComp4073Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4073Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4073Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
