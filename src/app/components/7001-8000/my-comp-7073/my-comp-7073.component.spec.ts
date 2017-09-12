import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7073Component } from './my-comp-7073.component';

describe('MyComp7073Component', () => {
  let component: MyComp7073Component;
  let fixture: ComponentFixture<MyComp7073Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7073Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7073Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
