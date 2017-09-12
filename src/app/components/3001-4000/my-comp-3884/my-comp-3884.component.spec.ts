import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3884Component } from './my-comp-3884.component';

describe('MyComp3884Component', () => {
  let component: MyComp3884Component;
  let fixture: ComponentFixture<MyComp3884Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3884Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
