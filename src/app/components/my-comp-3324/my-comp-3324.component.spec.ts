import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3324Component } from './my-comp-3324.component';

describe('MyComp3324Component', () => {
  let component: MyComp3324Component;
  let fixture: ComponentFixture<MyComp3324Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3324Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3324Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
