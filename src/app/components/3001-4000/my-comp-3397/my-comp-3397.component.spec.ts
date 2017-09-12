import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3397Component } from './my-comp-3397.component';

describe('MyComp3397Component', () => {
  let component: MyComp3397Component;
  let fixture: ComponentFixture<MyComp3397Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3397Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
