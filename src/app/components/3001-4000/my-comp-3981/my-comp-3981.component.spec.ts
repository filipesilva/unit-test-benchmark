import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3981Component } from './my-comp-3981.component';

describe('MyComp3981Component', () => {
  let component: MyComp3981Component;
  let fixture: ComponentFixture<MyComp3981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
