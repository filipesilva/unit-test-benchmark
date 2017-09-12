import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3406Component } from './my-comp-3406.component';

describe('MyComp3406Component', () => {
  let component: MyComp3406Component;
  let fixture: ComponentFixture<MyComp3406Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3406Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
