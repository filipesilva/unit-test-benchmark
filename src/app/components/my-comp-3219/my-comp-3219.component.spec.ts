import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3219Component } from './my-comp-3219.component';

describe('MyComp3219Component', () => {
  let component: MyComp3219Component;
  let fixture: ComponentFixture<MyComp3219Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3219Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
