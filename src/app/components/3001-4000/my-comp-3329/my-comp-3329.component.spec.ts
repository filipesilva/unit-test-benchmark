import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3329Component } from './my-comp-3329.component';

describe('MyComp3329Component', () => {
  let component: MyComp3329Component;
  let fixture: ComponentFixture<MyComp3329Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3329Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3329Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
