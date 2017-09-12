import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3504Component } from './my-comp-3504.component';

describe('MyComp3504Component', () => {
  let component: MyComp3504Component;
  let fixture: ComponentFixture<MyComp3504Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3504Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
