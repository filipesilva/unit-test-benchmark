import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3076Component } from './my-comp-3076.component';

describe('MyComp3076Component', () => {
  let component: MyComp3076Component;
  let fixture: ComponentFixture<MyComp3076Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3076Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
