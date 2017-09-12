import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3162Component } from './my-comp-3162.component';

describe('MyComp3162Component', () => {
  let component: MyComp3162Component;
  let fixture: ComponentFixture<MyComp3162Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3162Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
