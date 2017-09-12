import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1823Component } from './my-comp-1823.component';

describe('MyComp1823Component', () => {
  let component: MyComp1823Component;
  let fixture: ComponentFixture<MyComp1823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1823Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
