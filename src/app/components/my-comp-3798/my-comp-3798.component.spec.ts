import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3798Component } from './my-comp-3798.component';

describe('MyComp3798Component', () => {
  let component: MyComp3798Component;
  let fixture: ComponentFixture<MyComp3798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
