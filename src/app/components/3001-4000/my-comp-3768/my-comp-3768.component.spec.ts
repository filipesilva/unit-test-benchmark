import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3768Component } from './my-comp-3768.component';

describe('MyComp3768Component', () => {
  let component: MyComp3768Component;
  let fixture: ComponentFixture<MyComp3768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
