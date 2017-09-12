import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2713Component } from './my-comp-2713.component';

describe('MyComp2713Component', () => {
  let component: MyComp2713Component;
  let fixture: ComponentFixture<MyComp2713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
