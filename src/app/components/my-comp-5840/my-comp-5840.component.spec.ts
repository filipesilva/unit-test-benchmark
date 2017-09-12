import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5840Component } from './my-comp-5840.component';

describe('MyComp5840Component', () => {
  let component: MyComp5840Component;
  let fixture: ComponentFixture<MyComp5840Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5840Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
