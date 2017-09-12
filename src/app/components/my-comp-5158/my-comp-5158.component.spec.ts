import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5158Component } from './my-comp-5158.component';

describe('MyComp5158Component', () => {
  let component: MyComp5158Component;
  let fixture: ComponentFixture<MyComp5158Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5158Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
