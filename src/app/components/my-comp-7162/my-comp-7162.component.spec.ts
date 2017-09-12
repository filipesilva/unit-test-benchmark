import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7162Component } from './my-comp-7162.component';

describe('MyComp7162Component', () => {
  let component: MyComp7162Component;
  let fixture: ComponentFixture<MyComp7162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
