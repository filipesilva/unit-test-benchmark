import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5116Component } from './my-comp-5116.component';

describe('MyComp5116Component', () => {
  let component: MyComp5116Component;
  let fixture: ComponentFixture<MyComp5116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
