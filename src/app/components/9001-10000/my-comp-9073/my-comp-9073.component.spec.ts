import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9073Component } from './my-comp-9073.component';

describe('MyComp9073Component', () => {
  let component: MyComp9073Component;
  let fixture: ComponentFixture<MyComp9073Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9073Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9073Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
