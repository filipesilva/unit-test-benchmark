import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2288Component } from './my-comp-2288.component';

describe('MyComp2288Component', () => {
  let component: MyComp2288Component;
  let fixture: ComponentFixture<MyComp2288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
