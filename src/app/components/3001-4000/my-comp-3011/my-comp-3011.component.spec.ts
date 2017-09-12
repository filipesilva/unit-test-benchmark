import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3011Component } from './my-comp-3011.component';

describe('MyComp3011Component', () => {
  let component: MyComp3011Component;
  let fixture: ComponentFixture<MyComp3011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
