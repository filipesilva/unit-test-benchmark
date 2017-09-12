import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2511Component } from './my-comp-2511.component';

describe('MyComp2511Component', () => {
  let component: MyComp2511Component;
  let fixture: ComponentFixture<MyComp2511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2511Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
