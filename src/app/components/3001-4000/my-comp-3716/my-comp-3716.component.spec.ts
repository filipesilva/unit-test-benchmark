import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3716Component } from './my-comp-3716.component';

describe('MyComp3716Component', () => {
  let component: MyComp3716Component;
  let fixture: ComponentFixture<MyComp3716Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3716Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3716Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
