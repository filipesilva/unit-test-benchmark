import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5135Component } from './my-comp-5135.component';

describe('MyComp5135Component', () => {
  let component: MyComp5135Component;
  let fixture: ComponentFixture<MyComp5135Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5135Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5135Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
