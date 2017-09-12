import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3557Component } from './my-comp-3557.component';

describe('MyComp3557Component', () => {
  let component: MyComp3557Component;
  let fixture: ComponentFixture<MyComp3557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
