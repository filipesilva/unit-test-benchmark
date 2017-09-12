import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3738Component } from './my-comp-3738.component';

describe('MyComp3738Component', () => {
  let component: MyComp3738Component;
  let fixture: ComponentFixture<MyComp3738Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3738Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3738Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
