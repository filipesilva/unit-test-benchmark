import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2217Component } from './my-comp-2217.component';

describe('MyComp2217Component', () => {
  let component: MyComp2217Component;
  let fixture: ComponentFixture<MyComp2217Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2217Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2217Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
