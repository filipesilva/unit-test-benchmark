import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp444Component } from './my-comp-444.component';

describe('MyComp444Component', () => {
  let component: MyComp444Component;
  let fixture: ComponentFixture<MyComp444Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp444Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
