import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3554Component } from './my-comp-3554.component';

describe('MyComp3554Component', () => {
  let component: MyComp3554Component;
  let fixture: ComponentFixture<MyComp3554Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3554Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3554Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
