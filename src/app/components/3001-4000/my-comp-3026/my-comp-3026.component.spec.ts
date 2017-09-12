import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3026Component } from './my-comp-3026.component';

describe('MyComp3026Component', () => {
  let component: MyComp3026Component;
  let fixture: ComponentFixture<MyComp3026Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3026Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3026Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
