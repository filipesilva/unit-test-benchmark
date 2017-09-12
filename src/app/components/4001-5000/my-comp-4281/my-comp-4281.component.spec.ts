import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4281Component } from './my-comp-4281.component';

describe('MyComp4281Component', () => {
  let component: MyComp4281Component;
  let fixture: ComponentFixture<MyComp4281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
