import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3631Component } from './my-comp-3631.component';

describe('MyComp3631Component', () => {
  let component: MyComp3631Component;
  let fixture: ComponentFixture<MyComp3631Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3631Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3631Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
