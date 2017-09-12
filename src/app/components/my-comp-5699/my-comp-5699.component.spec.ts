import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5699Component } from './my-comp-5699.component';

describe('MyComp5699Component', () => {
  let component: MyComp5699Component;
  let fixture: ComponentFixture<MyComp5699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5699Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
