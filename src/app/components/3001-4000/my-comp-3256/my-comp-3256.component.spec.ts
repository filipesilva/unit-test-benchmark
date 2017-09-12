import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3256Component } from './my-comp-3256.component';

describe('MyComp3256Component', () => {
  let component: MyComp3256Component;
  let fixture: ComponentFixture<MyComp3256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
