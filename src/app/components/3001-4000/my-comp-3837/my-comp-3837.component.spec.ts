import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3837Component } from './my-comp-3837.component';

describe('MyComp3837Component', () => {
  let component: MyComp3837Component;
  let fixture: ComponentFixture<MyComp3837Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3837Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
