import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3900Component } from './my-comp-3900.component';

describe('MyComp3900Component', () => {
  let component: MyComp3900Component;
  let fixture: ComponentFixture<MyComp3900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3900Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
