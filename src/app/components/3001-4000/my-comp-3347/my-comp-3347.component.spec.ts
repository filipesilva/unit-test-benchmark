import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3347Component } from './my-comp-3347.component';

describe('MyComp3347Component', () => {
  let component: MyComp3347Component;
  let fixture: ComponentFixture<MyComp3347Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3347Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
