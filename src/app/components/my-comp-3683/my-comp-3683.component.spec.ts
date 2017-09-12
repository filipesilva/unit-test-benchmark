import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3683Component } from './my-comp-3683.component';

describe('MyComp3683Component', () => {
  let component: MyComp3683Component;
  let fixture: ComponentFixture<MyComp3683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
