import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3228Component } from './my-comp-3228.component';

describe('MyComp3228Component', () => {
  let component: MyComp3228Component;
  let fixture: ComponentFixture<MyComp3228Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3228Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
