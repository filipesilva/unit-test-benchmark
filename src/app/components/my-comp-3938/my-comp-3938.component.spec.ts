import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3938Component } from './my-comp-3938.component';

describe('MyComp3938Component', () => {
  let component: MyComp3938Component;
  let fixture: ComponentFixture<MyComp3938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3938Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
