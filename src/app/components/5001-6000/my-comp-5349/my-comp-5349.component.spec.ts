import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5349Component } from './my-comp-5349.component';

describe('MyComp5349Component', () => {
  let component: MyComp5349Component;
  let fixture: ComponentFixture<MyComp5349Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5349Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
