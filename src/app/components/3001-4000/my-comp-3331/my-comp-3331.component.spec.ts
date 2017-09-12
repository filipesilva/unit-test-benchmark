import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3331Component } from './my-comp-3331.component';

describe('MyComp3331Component', () => {
  let component: MyComp3331Component;
  let fixture: ComponentFixture<MyComp3331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
