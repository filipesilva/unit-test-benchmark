import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7396Component } from './my-comp-7396.component';

describe('MyComp7396Component', () => {
  let component: MyComp7396Component;
  let fixture: ComponentFixture<MyComp7396Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7396Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7396Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
