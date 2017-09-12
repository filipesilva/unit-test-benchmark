import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3818Component } from './my-comp-3818.component';

describe('MyComp3818Component', () => {
  let component: MyComp3818Component;
  let fixture: ComponentFixture<MyComp3818Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3818Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3818Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
