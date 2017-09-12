import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3581Component } from './my-comp-3581.component';

describe('MyComp3581Component', () => {
  let component: MyComp3581Component;
  let fixture: ComponentFixture<MyComp3581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
