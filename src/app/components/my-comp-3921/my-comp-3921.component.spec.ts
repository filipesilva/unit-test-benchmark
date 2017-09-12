import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3921Component } from './my-comp-3921.component';

describe('MyComp3921Component', () => {
  let component: MyComp3921Component;
  let fixture: ComponentFixture<MyComp3921Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3921Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
