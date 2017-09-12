import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2105Component } from './my-comp-2105.component';

describe('MyComp2105Component', () => {
  let component: MyComp2105Component;
  let fixture: ComponentFixture<MyComp2105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
