import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5937Component } from './my-comp-5937.component';

describe('MyComp5937Component', () => {
  let component: MyComp5937Component;
  let fixture: ComponentFixture<MyComp5937Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5937Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5937Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
