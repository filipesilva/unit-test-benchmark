import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3342Component } from './my-comp-3342.component';

describe('MyComp3342Component', () => {
  let component: MyComp3342Component;
  let fixture: ComponentFixture<MyComp3342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
