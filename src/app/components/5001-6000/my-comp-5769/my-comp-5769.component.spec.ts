import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5769Component } from './my-comp-5769.component';

describe('MyComp5769Component', () => {
  let component: MyComp5769Component;
  let fixture: ComponentFixture<MyComp5769Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5769Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5769Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
