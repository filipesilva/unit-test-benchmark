import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4388Component } from './my-comp-4388.component';

describe('MyComp4388Component', () => {
  let component: MyComp4388Component;
  let fixture: ComponentFixture<MyComp4388Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4388Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4388Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
