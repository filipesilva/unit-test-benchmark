import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3858Component } from './my-comp-3858.component';

describe('MyComp3858Component', () => {
  let component: MyComp3858Component;
  let fixture: ComponentFixture<MyComp3858Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3858Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
